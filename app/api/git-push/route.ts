import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token, branch = "main", repo = "lizagam68-web/ACUPUNTURA-CDMX" } = body;

    if (!token || typeof token !== "string" || token.trim().length < 10) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Por favor ingresa un Personal Access Token (PAT) válido de GitHub (ej. ghp_...)." 
        },
        { status: 400 }
      );
    }

    const cleanToken = token.trim();
    // Allow standard GitHub tokens: classic (ghp_...), fine-grained (github_pat_...), or legacy hex
    if (!/^[a-zA-Z0-9_\-]+$/.test(cleanToken)) {
      return NextResponse.json(
        { success: false, error: "El formato del token contiene caracteres no válidos." },
        { status: 400 }
      );
    }

    const cleanRepo = repo.replace(/[^a-zA-Z0-9_\-\/]/g, "").trim();
    const cleanBranch = branch.replace(/[^a-zA-Z0-9_\-]/g, "").trim() || "main";

    const pushUrl = `https://${cleanToken}@github.com/${cleanRepo}.git`;

    try {
      // Execute git push with credentials in the URL
      const { stdout, stderr } = await execAsync(
        `git push ${pushUrl} ${cleanBranch}`,
        {
          cwd: process.cwd(),
          timeout: 30000,
          env: {
            ...process.env,
            GIT_TERMINAL_PROMPT: "0",
          },
        }
      );

      const sanitizedOutput = `${stdout}\n${stderr}`.replaceAll(cleanToken, "ghp_***");

      return NextResponse.json({
        success: true,
        message: "¡Código subido exitosamente a GitHub!",
        details: sanitizedOutput.trim(),
      });
    } catch (execError: unknown) {
      const err = execError as { message?: string; stdout?: string; stderr?: string };
      const rawError = `${err.stderr || ""} ${err.stdout || ""} ${err.message || ""}`;
      const safeError = rawError.replaceAll(cleanToken, "ghp_***");

      let userAdvice = safeError;
      if (safeError.includes("Authentication failed") || safeError.includes("Bad credentials")) {
        userAdvice = "Error de autenticación: El token ingresado es incorrecto, expiró o no tiene permiso de escritura ('repo').";
      } else if (safeError.includes("Permission to") && safeError.includes("denied")) {
        userAdvice = "Permiso denegado: Tu cuenta de GitHub no tiene permisos de escritura en este repositorio, o el token no tiene el scope 'repo'.";
      } else if (safeError.includes("non-fast-forward") || safeError.includes("fetch first")) {
        userAdvice = "Conflicto: El repositorio remoto contiene commits que no están localmente. Se requiere un pull antes de hacer push.";
      }

      return NextResponse.json(
        {
          success: false,
          error: userAdvice,
          rawDetails: safeError.trim(),
        },
        { status: 400 }
      );
    }
  } catch (error: unknown) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message || "Error interno del servidor al procesar el push." },
      { status: 500 }
    );
  }
}
