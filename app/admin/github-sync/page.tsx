"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  GitBranch, 
  Check, 
  Copy, 
  ArrowLeft, 
  ExternalLink, 
  Terminal, 
  ShieldCheck, 
  AlertTriangle,
  FolderGit2,
  RefreshCw,
  Key,
  UploadCloud,
  Loader2,
  Eye,
  EyeOff,
  CheckCircle2
} from "lucide-react";

export default function GitHubSyncPage() {
  const [username, setUsername] = useState("lizagam68-web");
  const [repoName, setRepoName] = useState("ACUPUNTURA-CDMX");
  const [token, setToken] = useState("");
  const [showToken, setShowToken] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  
  // Direct push states
  const [pushStatus, setPushStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [pushMessage, setPushMessage] = useState<string>("");
  const [pushDetails, setPushDetails] = useState<string>("");

  const cleanUsername = username.trim() || "lizagam68-web";
  const cleanRepo = repoName.trim() || "ACUPUNTURA-CDMX";
  const repoUrl = `https://github.com/${cleanUsername}/${cleanRepo}.git`;
  const cleanToken = token.trim();
  const pushUrlWithToken = cleanToken 
    ? `https://${cleanToken}@github.com/${cleanUsername}/${cleanRepo}.git`
    : `https://<TU_TOKEN_AQUI>@github.com/${cleanUsername}/${cleanRepo}.git`;

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      // Fallback
    }
  };

  const handleDirectPush = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cleanToken) {
      setPushStatus("error");
      setPushMessage("Por favor ingresa tu Personal Access Token (PAT) de GitHub.");
      return;
    }

    setPushStatus("loading");
    setPushMessage("Conectando con GitHub y subiendo los archivos...");
    setPushDetails("");

    try {
      const res = await fetch("/api/git-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: cleanToken,
          repo: `${cleanUsername}/${cleanRepo}`,
          branch: "main",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setPushStatus("success");
        setPushMessage(data.message || "¡Push completado con éxito a GitHub!");
        setPushDetails(data.details || "");
      } else {
        setPushStatus("error");
        setPushMessage(data.error || "Ocurrió un error al subir el código a GitHub.");
        setPushDetails(data.rawDetails || "");
      }
    } catch (err: unknown) {
      const error = err as Error;
      setPushStatus("error");
      setPushMessage("Error de conexión: " + (error.message || "No se pudo contactar al servidor."));
    }
  };

  const directPushCmd = `git push ${pushUrlWithToken} main`;
  const setRemoteWithTokenCmd = `git remote set-url origin ${pushUrlWithToken} && git push -u origin main`;
  const futurePushCmd = `git add . && git commit -m "Actualización del proyecto" && git push`;

  return (
    <div className="min-h-screen bg-[#0a151a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e3943] pb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-[#8ea89d] hover:text-[#f4e1cb] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Volver a la Clínica</span>
          </Link>
          <div className="flex items-center gap-2 text-xs bg-[#12242b] px-3 py-1.5 rounded-full border border-[#2c4955] text-[#d6ccbe]">
            <FolderGit2 size={14} className="text-[#059669]" />
            <span>Repositorio: <strong className="text-white font-mono">{cleanUsername}/{cleanRepo}</strong></span>
          </div>
        </div>

        {/* Title Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#059669] bg-[#059669]/10 px-3 py-1 rounded-md border border-[#059669]/30">
            <GitBranch size={14} /> Opción A Seleccionada
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Subir Cambios a GitHub (Personal Access Token)
          </h1>
          <p className="text-[#8ea89d] text-sm sm:text-base leading-relaxed">
            El commit con los 141 archivos del proyecto está preparado y verificado en la rama <strong className="text-white">main</strong>. Para completar la sincronización con tu repositorio <strong className="text-[#f4e1cb] font-mono">{repoUrl}</strong>, solo necesitas tu Personal Access Token (PAT) de GitHub.
          </p>
        </div>

        {/* TOKEN GENERATOR DIRECT LINK CARD */}
        <div className="bg-[#12242b] border border-[#2c4955] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Key size={18} className="text-[#059669]" />
              <span>Paso Previo: Generar tu Token en GitHub (1 minuto)</span>
            </div>
            <a
              href="https://github.com/settings/tokens/new?scopes=repo&description=Acupuntura-CDMX-Sync"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md"
            >
              <span>Abrir GitHub y Generar Token</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="text-xs sm:text-sm text-[#8ea89d] space-y-2 leading-relaxed">
            <p>
              El enlace anterior abre directamente la página oficial de GitHub con el permiso <code className="text-[#34d399] bg-[#0a151a] px-1.5 py-0.5 rounded border border-[#1e3943]">repo</code> (escritura) ya premarcado:
            </p>
            <ol className="list-decimal list-inside space-y-1 pl-1 text-[#d6ccbe]">
              <li>Haz clic en el botón verde <strong>&quot;Abrir GitHub y Generar Token&quot;</strong> arriba.</li>
              <li>Baja al final de la página en GitHub y haz clic en el botón verde <strong>&quot;Generate token&quot;</strong>.</li>
              <li>Copia el token generado (empieza por <code className="text-[#f4e1cb]">ghp_...</code>).</li>
            </ol>
          </div>
        </div>

        {/* METHOD 1: INSTANT WEB PUSH */}
        <div className="bg-gradient-to-br from-[#12242b] to-[#152e37] border-2 border-[#059669]/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2">
            <UploadCloud size={24} className="text-[#34d399]" />
            <div>
              <h2 className="text-lg font-serif font-bold text-white">
                Método 1: Subir Directamente desde Esta Ventana
              </h2>
              <p className="text-xs text-[#8ea89d]">
                Pega tu token aquí y haz clic para subir los 141 archivos automáticamente sin abrir la terminal.
              </p>
            </div>
          </div>

          <form onSubmit={handleDirectPush} className="space-y-4">
            <div>
              <label htmlFor="pat-input" className="block text-xs font-medium text-[#d6ccbe] mb-1.5">
                Pega tu Personal Access Token (PAT) de GitHub:
              </label>
              <div className="relative">
                <input
                  id="pat-input"
                  type={showToken ? "text" : "password"}
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  className="w-full bg-[#0a151a] border border-[#2c4955] rounded-xl px-4 py-3 pr-11 text-white text-sm font-mono focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowToken(!showToken)}
                  className="absolute right-3 top-3 text-[#8ea89d] hover:text-white transition-colors"
                  title={showToken ? "Ocultar token" : "Mostrar token"}
                >
                  {showToken ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-[11px] text-[#8ea89d] mt-1.5">
                🔒 Tu token solo se utiliza en memoria para ejecutar el comando git push y nunca se guarda en disco ni en base de datos.
              </p>
            </div>

            <button
              type="submit"
              disabled={pushStatus === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] disabled:bg-[#1f4a3c] text-white font-medium text-sm px-6 py-3 rounded-xl transition-all shadow-lg cursor-pointer"
            >
              {pushStatus === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Subiendo cambios a GitHub...</span>
                </>
              ) : (
                <>
                  <UploadCloud size={18} />
                  <span>Subir Cambios a GitHub Ahora</span>
                </>
              )}
            </button>
          </form>

          {/* Feedback states */}
          {pushStatus === "success" && (
            <div className="bg-[#059669]/15 border border-[#059669]/40 rounded-xl p-4 text-xs sm:text-sm text-white space-y-2">
              <div className="flex items-center gap-2 text-[#34d399] font-bold">
                <CheckCircle2 size={18} />
                <span>{pushMessage}</span>
              </div>
              <p className="text-[#8ea89d]">
                Todos los cambios ya se encuentran disponibles en tu repositorio remoto:
              </p>
              <a
                href={`https://github.com/${cleanUsername}/${cleanRepo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#34d399] hover:underline font-mono text-xs font-semibold"
              >
                <span>Ver repositorio en GitHub</span>
                <ExternalLink size={12} />
              </a>
              {pushDetails && (
                <pre className="bg-[#0a151a] p-3 rounded-lg text-xs font-mono text-[#8ea89d] overflow-x-auto border border-[#1e3943]">
                  {pushDetails}
                </pre>
              )}
            </div>
          )}

          {pushStatus === "error" && (
            <div className="bg-red-950/40 border border-red-500/40 rounded-xl p-4 text-xs sm:text-sm text-red-200 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <AlertTriangle size={18} />
                <span>{pushMessage}</span>
              </div>
              {pushDetails && (
                <pre className="bg-[#0a151a] p-3 rounded-lg text-xs font-mono text-red-300/80 overflow-x-auto border border-red-900/30">
                  {pushDetails}
                </pre>
              )}
            </div>
          )}
        </div>

        {/* METHOD 2: TERMINAL COPY-PASTE */}
        <div className="bg-[#12242b] border border-[#2c4955] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Terminal size={20} className="text-[#f4e1cb]" />
              Método 2: Ejecutar en tu Terminal
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8ea89d]">
            Si prefieres ejecutar el comando tú mismo en la consola de tu computadora o servidor, usa el siguiente comando listo para copiar:
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#d6ccbe]">
                <span className="font-semibold">Opción 2A: Push directo con Token en la URL</span>
                <button
                  onClick={() => copyToClipboard(directPushCmd, "cmdA")}
                  className="inline-flex items-center gap-1.5 bg-[#18313a] hover:bg-[#2c4955] text-white px-3 py-1.5 rounded-lg border border-[#3b5e6d] text-xs transition-all"
                >
                  {copiedKey === "cmdA" ? (
                    <>
                      <Check size={14} className="text-[#059669]" />
                      <span className="text-[#059669] font-bold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar comando</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-[#0a151a] p-3.5 rounded-xl text-xs sm:text-sm font-mono text-[#f4e1cb] overflow-x-auto border border-[#1e3943]">
                {directPushCmd}
              </pre>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#d6ccbe]">
                <span className="font-semibold">Opción 2B: Configurar el remote permanente con el Token</span>
                <button
                  onClick={() => copyToClipboard(setRemoteWithTokenCmd, "cmdB")}
                  className="inline-flex items-center gap-1.5 bg-[#18313a] hover:bg-[#2c4955] text-white px-3 py-1.5 rounded-lg border border-[#3b5e6d] text-xs transition-all"
                >
                  {copiedKey === "cmdB" ? (
                    <>
                      <Check size={14} className="text-[#059669]" />
                      <span className="text-[#059669] font-bold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar comando</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-[#0a151a] p-3.5 rounded-xl text-xs sm:text-sm font-mono text-[#34d399] overflow-x-auto border border-[#1e3943]">
                {setRemoteWithTokenCmd}
              </pre>
            </div>
          </div>
        </div>

        {/* Future sync section */}
        <div className="bg-[#12242b] border border-[#2c4955] rounded-2xl p-6 space-y-4">
          <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
            <RefreshCw size={18} className="text-[#f4e1cb]" />
            ¿Cómo actualizar cambios futuros en GitHub?
          </h3>
          <p className="text-xs sm:text-sm text-[#8ea89d]">
            Una vez hecho el primer push, para subir nuevos cambios que hagas en el código en el futuro:
          </p>
          <div className="relative">
            <pre className="bg-[#0a151a] p-3.5 rounded-xl text-xs sm:text-sm font-mono text-[#d6ccbe] overflow-x-auto border border-[#1e3943]">
              {futurePushCmd}
            </pre>
            <button
              onClick={() => copyToClipboard(futurePushCmd, "future")}
              className="absolute right-2 top-2 p-1.5 bg-[#18313a] hover:bg-[#2c4955] rounded-md text-white text-xs"
              title="Copiar comando de actualización"
            >
              {copiedKey === "future" ? <Check size={14} className="text-[#059669]" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Security & Authentication Notice */}
        <div className="bg-[#12242b] border border-[#2c4955] rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#f4e1cb]">
            <ShieldCheck size={18} className="text-[#059669]" />
            <span>¿Por qué GitHub solicita un Token en lugar de la contraseña?</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8ea89d] leading-relaxed">
            Desde agosto de 2021, GitHub eliminó el soporte para contraseñas de cuenta directa en operaciones Git por razones de seguridad. Un <strong>Personal Access Token (PAT)</strong> actúa como una clave temporal con permisos específicos (<code className="text-[#34d399]">repo</code>) que puedes revocar en cualquier momento sin comprometer tu cuenta personal.
          </p>
        </div>

      </div>
    </div>
  );
}
