import { SectionHeading } from "@/components/ui/SectionHeading";

export default function SobrePage() {
  return (
    <section className="section-card">
      <SectionHeading
        title="Sobre o Projeto"
        subtitle="Iniciativa de I&D liderada pela TecMinho em alinhamento com estrategia europeia."
      />
      <p>
        A Portuguese Digital Wallet reposiciona a identidade digital com foco em confianca
        institucional, privacidade por design e interoperabilidade no contexto eIDAS 2.0.
      </p>
    </section>
  );
}
