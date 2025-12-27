import IntegrationsCard, { Integration } from "../IntegrationsCard";

export function IntegrationsTab({ connected = false }: { connected?: boolean }) {
  const integrations: Integration[] = connected
    ? [
        { id: "figma", name: "Figma", icon: "/icons/figma-int.svg", status: "connected" },
        { id: "webflow", name: "Webflow", icon: "/icons/webflow.svg", status: "coming-soon" },
        { id: "canva", name: "Canva", icon: "/icons/canva-int.svg", status: "coming-soon" },
        // { id: "adobe", name: "Adobe XD", icon: "/icons/adobe-xd.svg", status: "coming-soon" },
      ]
    : [
        { id: "figma", name: "Figma", icon: "/icons/figma-int.svg", status: "none" },
        { id: "webflow", name: "Webflow", icon: "/icons/webflow.svg", status: "coming-soon" },
        { id: "canva", name: "Canva", icon: "/icons/canva-int.svg", status: "coming-soon" },
        // { id: "adobe", name: "Adobe XD", icon: "/icons/adobe-xd.svg", status: "coming-soon" },
      ];

  return <IntegrationsCard integrations={integrations} anyConnected={connected} />;
}