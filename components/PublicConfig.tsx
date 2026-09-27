"use client";

export default function PublicConfig() {
  const portalName = process.env.NEXT_PUBLIC_PORTAL_NAME ?? "Portal name not configured";

  return (
    <section className="content-card">
      <h2>Public configuration</h2>
      <p>Portal name: {portalName}</p>
      <p>NEXT_PUBLIC_ values can be included in client-side JavaScript, so they must never contain secrets.</p>
    </section>
  );
}
