"use client";

import { useState, useCallback, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode } from "lucide-react";
import { useCursor } from "./cursorContext";

const currencies = [
  { code: "USD", symbol: "$", rate: 1 },
  { code: "EUR", symbol: "€", rate: 0.91 },
  { code: "DKK", symbol: "DKK ", rate: 7.27 },
] as const;

type Currency = (typeof currencies)[number]["code"];

interface Option {
  id: string;
  label: string;
  price: number;
  available?: boolean;
}

const frameworks: Option[] = [
  { id: "dev", label: "Developer's choice", price: 0 },
  { id: "next", label: "Next.js", price: 500 },
  { id: "astro", label: "Astro", price: 500 },
];

const designs: Option[] = [
  { id: "have-design", label: "I already have a design", price: 0 },
  { id: "need-design", label: "I need a design", price: 2000 },
];

const extras = [
  {
    id: "animations",
    label: "2D Animations",
    description: "Smooth transitions and micro-interactions",
    price: 1000,
  },
  {
    id: "3d-animations",
    label: "3D Animations",
    description: "Interactive 3D elements and animations",
    price: 2500,
  },
  {
    id: "cms",
    label: "Content Management",
    description: "Easy content updates and management",
    price: 1500,
  },
  {
    id: "auth",
    label: "Authentication",
    description: "Secure user accounts and profiles",
    price: 1000,
  },
  {
    id: "api",
    label: "API Integration",
    description: "Connect with external services",
    price: 1500,
  },
  {
    id: "analytics",
    label: "Advanced Analytics",
    description: "Detailed user behavior tracking and reporting",
    price: 800,
  },
  {
    id: "login-flows",
    label: "Custom Login Flows",
    description: "Social login, MFA, and password recovery",
    price: 1200,
  },
  {
    id: "advanced-seo",
    label: "Advanced SEO",
    description: "Schema markup, sitemap, and metadata optimization",
    price: 1000,
  },
  {
    id: "revisions",
    label: "2 Rounds of Revisions",
    description: "Additional rounds of design and development changes",
    price: 1500,
  },
];

const projectTypes: Option[] = [
  { id: "portfolio", label: "Portfolio", price: 0 },
  { id: "business", label: "Business Website", price: 1500 },
  { id: "ecommerce", label: "E-commerce", price: 2500 },
  { id: "blog", label: "Blog", price: 0 },
];

const timelines: Option[] = [
  { id: "standard", label: "Standard (8-12 weeks)", price: 0 },
  { id: "fast", label: "Fast Track (4-6 weeks)", price: 2000 },
  { id: "urgent", label: "Urgent (2-3 weeks)", price: 4000 },
];

const hosting: Option[] = [
  { id: "static", label: "Static Hosting", price: 0 },
  { id: "vercel", label: "Vercel", price: 0 },
  { id: "netlify", label: "Netlify", price: 0 },
  { id: "custom", label: "Custom Server", price: 1000 },
];

const complexFeatures = [
    "revisions",
    "login-flows",
    "3d-animations",
    "analytics",
    "api",
    "cms"
  ];
  
  const requiresDynamic = (type: string, extras: string[]) => {
    return (
      type === "ecommerce" ||
      extras.includes("auth") ||
      extras.includes("cms") ||
      extras.includes("api") ||
      extras.includes("login-flows")
    );
  };
  
  const isUrgentTimelineDisabled = (projectType: string, selectedExtras: string[]) => {
    return (
      projectType === "ecommerce" ||
      selectedExtras.some(extra => complexFeatures.includes(extra))
    );
  };

export function ProjectConfigurator() {
    const [framework, setFramework] = useState("dev");
    const [design, setDesign] = useState("have-design");
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
    const [currency, setCurrency] = useState<Currency>("USD");
    const { setIsHovering } = useCursor();
    const [projectType, setProjectType] = useState("portfolio");
    const [timeline, setTimeline] = useState("standard");
    const [hostingOption, setHostingOption] = useState("vercel");
    const [emailSent, setEmailSent] = useState(false);
  
    const dynamicRequired = requiresDynamic(framework, selectedExtras);
    const urgentDisabled = isUrgentTimelineDisabled(projectType, selectedExtras);
  
    useEffect(() => {
      if (urgentDisabled && timeline === "urgent") {
        setTimeline("standard");
      }
    }, [urgentDisabled, timeline]);

    useEffect(() => {
      if (dynamicRequired && framework === "astro") {
        setFramework("next");
      }
    }, [dynamicRequired, framework]);

  const formatPrice = (price: number) => {
    const curr = currencies.find((c) => c.code === currency)!;
    const converted = price * curr.rate;
    return `${curr.symbol}${Math.round(converted).toLocaleString()}`;
  };

  const calculateTotal = () => {
    const designCost = designs.find((d) => d.id === design)?.price || 0;
    const projectTypeCost = projectTypes.find((p) => p.id === projectType)?.price || 0;
    const timelineCost = timelines.find((t) => t.id === timeline)?.price || 0;
    const hostingCost = hosting.find((h) => h.id === hostingOption)?.price || 0;
    const extrasCost = extras
      .filter((extra) => selectedExtras.includes(extra.id))
      .reduce((sum, extra) => sum + extra.price, 0);
    return designCost + projectTypeCost + timelineCost + hostingCost + extrasCost;
  };

  const handleBookMeeting = useCallback(() => {
    const selectedFramework = frameworks.find(
      (fw) => fw.id === framework
    )?.label;
    const selectedDesign = designs.find((d) => d.id === design)?.label;
    const selectedExtrasList = extras
      .filter((extra) => selectedExtras.includes(extra.id))
      .map((extra) => extra.label)
      .join(", ");

    const subject = encodeURIComponent("New Project Request");
    const body = encodeURIComponent(`
Hello Charlie,

I'd like to book a meeting to discuss my project with the following configuration:

Framework: ${selectedFramework}
Design: ${selectedDesign}
Extras: ${selectedExtrasList}
Total Estimated Cost: $${1500 + calculateTotal()}

Looking forward to discussing this further.

Best regards,
[Your Name]
    `);

    // Set final screen state and trigger email client.
    setEmailSent(true);
    window.location.href = `mailto:charlie@unedited.site?subject=${subject}&body=${body}`;
  }, [framework, design, selectedExtras, calculateTotal]);

  if (emailSent) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-center mb-6">
          Your project request has been sent successfully. We will get back to you soon.
        </p>
        <button 
          className="px-6 py-2 bg-primary text-white rounded-md"
          onClick={() => {setEmailSent(false); setIsHovering(false)}}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Configure another project
        </button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-8 max-w-[1400px] mx-auto px-4 lg:px-8">
      <div className="space-y-12 pb-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <section className="space-y-6">
            <h2 className="text-2xl font-medium">Project Type</h2>
            <RadioGroup
              value={projectType}
              onValueChange={setProjectType}
              className="grid gap-4"
            >
              {projectTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-3">
                  <RadioGroupItem
                    value={type.id}
                    id={type.id}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setIsHovering(false)}
                  />
                  <Label htmlFor={type.id} className="text-base">{type.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-medium mb-6">Framework</h2>
            <RadioGroup
              value={framework}
              onValueChange={setFramework}
              className="grid gap-3"
            >
              {frameworks.map((fw) => (
                <div key={fw.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={fw.id}
                    id={fw.id}
                    disabled={fw.id === "astro" && dynamicRequired}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setIsHovering(false)}
                  />
                  <Label 
                    htmlFor={fw.id}
                    className={fw.id === "astro" && dynamicRequired ? "text-muted-foreground" : ""}
                  >
                    {fw.label}
                    {fw.id === "astro" && dynamicRequired && (
                      <span className="block text-xs text-muted-foreground">
                        Not available with selected features
                      </span>
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </section>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <section className="space-y-6">
            <h2 className="text-2xl font-medium mb-6">Design</h2>
            <RadioGroup
              value={design}
              onValueChange={setDesign}
              className="grid gap-3"
            >
              {designs.map((d) => (
                <div key={d.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={d.id}
                    id={d.id}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setIsHovering(false)}
                  />
                  <Label htmlFor={d.id}>{d.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-medium mb-6">Timeline</h2>
            <RadioGroup
              value={timeline}
              onValueChange={setTimeline}
              className="grid gap-3"
            >
              {timelines.map((time) => (
                <div key={time.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={time.id}
                    id={time.id}
                    disabled={time.id === "urgent" && urgentDisabled}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setIsHovering(false)}
                  />
                  <Label 
                    htmlFor={time.id}
                    className={time.id === "urgent" && urgentDisabled ? "text-muted-foreground" : ""}
                  >
                    {time.label}
                    {time.id === "urgent" && urgentDisabled && (
                      <span className="block text-xs text-muted-foreground">
                        Not available with selected features
                      </span>
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </section>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-medium">Extras</h2>
          <div className="grid lg:grid-cols-2 gap-4">
            {extras.map((extra) => (
              <div
                key={extra.id}
                className="flex items-start space-x-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  id={extra.id}
                  checked={selectedExtras.includes(extra.id)}
                  onCheckedChange={(checked) => {
                    setSelectedExtras(
                      checked
                        ? [...selectedExtras, extra.id]
                        : selectedExtras.filter((id) => id !== extra.id)
                    );
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={() => setIsHovering(false)}
                  className="mt-1"
                />
                <div className="space-y-1.5">
                  <Label htmlFor={extra.id} className="text-base">
                    {extra.label}
                  </Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {extra.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="relative lg:min-h-screen">
        <div className="sticky top-20">
          <Card className="backdrop-blur-sm bg-background/95 shadow-xl border-muted">
            <div className="relative">
              <div className="absolute inset-x-0 -top-4 h-4 bg-gradient-to-b from-background to-transparent z-10" />
              <div className="absolute inset-x-0 -bottom-4 h-4 bg-gradient-to-t from-background to-transparent z-10" />
              
              <div className="max-h-[calc(100vh-2rem)] overflow-y-auto p-6 scroll-smooth">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1.5">
                        <h3 className="font-medium text-lg">Your Project</h3>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="font-medium text-foreground">Type:</span>
                            {projectTypes.find(p => p.id === projectType)?.label}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="font-medium text-foreground">Framework:</span> 
                            {frameworks.find(fw => fw.id === framework)?.label}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="font-medium text-foreground">Design:</span>
                            {designs.find(d => d.id === design)?.label}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="font-medium text-foreground">Timeline:</span>
                            {timelines.find(t => t.id === timeline)?.label}
                          </p>
                        </div>
                      </div>
                      <QrCode className="h-8 w-8 text-muted-foreground" />
                    </div>

                    <div className="border rounded-lg p-3 space-y-3">
                      <p className="text-sm font-medium">Currency</p>
                      <RadioGroup
                        value={currency}
                        onValueChange={(value: Currency) => setCurrency(value)}
                        className="grid grid-cols-3 gap-2"
                      >
                        {currencies.map((curr) => (
                          <div
                            key={curr.code}
                            className="flex items-center justify-center"
                          >
                            <RadioGroupItem
                              value={curr.code}
                              id={`currency-${curr.code}`}
                              className="peer hidden"
                              onMouseEnter={() => setIsHovering(true)}
                              onMouseLeave={() => setIsHovering(false)}
                              onClick={() => setIsHovering(false)}
                            />
                            <Label
                              htmlFor={`currency-${curr.code}`}
                              className="px-3 py-2 rounded-md text-sm cursor-pointer border peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted transition-colors"
                            >
                              {curr.code}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Base price</span>
                      <span>{formatPrice(1500)}</span>
                    </div>
                    {projectType !== "business" && projectType !== "portfolio" && (
                      <div className="flex justify-between mb-2">
                        <span>Project type</span>
                        <span>{formatPrice(projectTypes.find(p => p.id === projectType)?.price || 0)}</span>
                      </div>
                    )}
                    {timeline !== "standard" && (
                      <div className="flex justify-between mb-2">
                        <span>Timeline</span>
                        <span>{formatPrice(timelines.find(t => t.id === timeline)?.price || 0)}</span>
                      </div>
                    )}
                    {hostingOption === "custom" && (
                      <div className="flex justify-between mb-2">
                        <span>Custom hosting</span>
                        <span>{formatPrice(1000)}</span>
                      </div>
                    )}
                    {design === "need-design" && (
                      <div className="flex justify-between mb-2">
                        <span>Design</span>
                        <span>{formatPrice(2000)}</span>
                      </div>
                    )}
                    {selectedExtras.map((extraId) => {
                      const extra = extras.find((e) => e.id === extraId);
                      return (
                        <div key={extraId} className="flex justify-between mb-2">
                          <span>{extra?.label}</span>
                          <span>{formatPrice(extra?.price || 0)}</span>
                        </div>
                      );
                    })}
                    <div className="border-t mt-4 pt-4 flex justify-between font-medium">
                      <span>Total</span>
                      <span>{formatPrice(1500 + calculateTotal())}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => {
                      setIsHovering(false);
                      handleBookMeeting();
                    }}
                  >
                    Book a meeting
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
