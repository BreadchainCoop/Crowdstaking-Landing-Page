"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Coins,
  TrendingUp,
  Target,
} from "lucide-react"
import { InterestCalculator } from "@/components/InterestCalculator"
import Image from "next/image"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center gap-2" href="/">
              <Image
                src="/images/crowdstaking-logo.jpg"
                alt="Crowdstaking"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="font-[var(--font-kufam)] text-foreground">Crowdstaking</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a
                  href="#features"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  How it Works
                </a>
                <a
                  href="#get-started"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Get Started
                </a>
                <a
                  href="https://bread.coop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:text-primary/80"
                >
                  Bread Cooperative
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Documentation
              </Button>
              <Button size="sm">Deploy Your Instance</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] opacity-[0.07]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1
                  className="text-5xl md:text-7xl tracking-tight text-balance"
                  style={{ fontFamily: "var(--font-kufam)" }}
                >
                  <span className="text-primary">Crowdstaking</span>
                  <br />
                  <span className="text-secondary italic text-2xl md:text-3xl leading-relaxed">
                    Turning shared funds into shared futures.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-[560px] leading-relaxed">
                  Crowdstaking transforms any pool of money into an
                  interest-generating engine to fund your group{"'"}s shared
                  goals. Your deposited funds remain safely staked and fully
                  withdrawable -- only the interest gets allocated.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 rounded-xl">
                  Deploy Your Instance
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 rounded-xl border-primary/30 text-foreground hover:bg-primary/10"
                >
                  View Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Open source protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Fully customizable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Decentralized governance</span>
                </div>
              </div>
            </div>

            <div className="relative space-y-8">
              <InterestCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts and Design Principles Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-3xl md:text-4xl text-foreground"
              style={{ fontFamily: "var(--font-kufam)" }}
            >
              Fund what{"'"}s meaningful to you
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
            {/* Key Concepts Column */}
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl mb-6 text-primary"
                  style={{ fontFamily: "var(--font-kufam)" }}
                >
                  Key Concepts
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg mb-2 text-foreground">Interest Distribution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The protocol accumulates interest and distributes it to
                      each user.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg mb-2 text-foreground">Cycle-Based Operations</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The system operates in fixed-length cycles (measured in
                      blocks), providing predictable distribution schedules
                      while allowing for regular reallocation of resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Principles Column */}
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl mb-6 text-secondary"
                  style={{ fontFamily: "var(--font-kufam)" }}
                >
                  Design Principles
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg mb-2 text-foreground">Accessibility</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Any community can deploy and customize their own instance
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg mb-2 text-foreground">Decentralization</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      No single entity controls interest distribution
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg mb-2 text-foreground">Flexibility</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Support for adding/removing interest recipients and
                      adjusting parameters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-foreground"
              style={{ fontFamily: "var(--font-kufam)" }}
            >
              Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <Card className="p-6 border-border/50 hover:border-primary/30 transition-all">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl text-foreground">Automated Yield Generation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Community members deposit funds to generate interest on the
                    principal.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/50 hover:border-primary/30 transition-all">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl text-foreground">White-Label Ready</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deploy with your organization{"'"}s branding and customize
                    the interface to match your community{"'"}s needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/50 hover:border-primary/30 transition-all">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl text-foreground">Interest Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced strategies automatically rebalance funds across
                    DeFi protocols to maximize community returns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/50 hover:border-primary/30 transition-all">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl text-foreground">Project Tracking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monitor funded projects with milestone-based payments and
                    transparent progress reporting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Under the Hood Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-3xl md:text-4xl text-foreground"
              style={{ fontFamily: "var(--font-kufam)" }}
            >
              Under the Hood
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Crowdstaking application is a smart contract system on Gnosis
              Chain that accepts users{"'"} xDAI and converts it into sDAI
              (yield-bearing stablecoins). In exchange, stakers receive
              project-specific tokens minted at a 1:1 ratio with their
              collateralized xDAI. All interest earned on the sDAI funds their
              shared goal.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              <div className="text-center space-y-4">
                <h2
                  className="text-3xl md:text-4xl text-foreground text-balance"
                  style={{ fontFamily: "var(--font-kufam)" }}
                >
                  Fundraising for free: from shared funds to shared futures
                </h2>
              </div>

              <div className="space-y-8 max-w-2xl mx-auto">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Community pools assets</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Members deposit funds to the shared community pool in your
                      own branded interface.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Automated interest generation</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Funds are automatically generating yield through
                      overcollateralized loans.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Community decides on funding</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Interest is allocated to your community{"'"}s shared goal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Projects get funded</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Projects receive funding while members retain their
                      original principal amount.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-3xl md:text-4xl text-foreground"
              style={{ fontFamily: "var(--font-kufam)" }}
            >
              Start funding your community goal today
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Crowdstaking is completely free and open source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Quick Deploy Option */}
            <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <Badge variant="secondary" className="w-fit">
                    Recommended
                  </Badge>
                  <h3 className="text-xl text-foreground">Quick Deploy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Get your community protocol running in minutes with our
                    hosted solution. Perfect for communities who want to focus on
                    their mission, not technical setup.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div>
                    <p className="text-sm text-muted-foreground">Timeline</p>
                    <p className="text-base text-foreground">24-48 hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Technical knowledge
                    </p>
                    <p className="text-base text-foreground">None required</p>
                  </div>
                </div>

                <Button size="lg" className="w-full rounded-xl">
                  Start Quick Deploy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Self-Deploy Option */}
            <Card className="p-6 border-secondary/20 hover:border-secondary/40 transition-all">
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <Badge
                    variant="outline"
                    className="w-fit border-secondary text-secondary"
                  >
                    Advanced
                  </Badge>
                  <h3 className="text-xl text-foreground">Self-Deploy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deploy and customize your own instance with full control over
                    smart contracts, infrastructure, and governance parameters.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div>
                    <p className="text-sm text-muted-foreground">Timeline</p>
                    <p className="text-base text-foreground">1-2 weeks</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Technical knowledge
                    </p>
                    <p className="text-base text-foreground">{"Solidity & Web3"}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl border-secondary/30 hover:bg-secondary/10"
                  >
                    View Documentation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl border-secondary/30 hover:bg-secondary/10"
                  >
                    Clone Repository
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Need help deciding? Our team is here to guide you.
            </p>
            <Button variant="ghost" size="lg" className="text-lg text-foreground">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl text-primary-foreground"
              style={{ fontFamily: "var(--font-kufam)" }}
            >
              Ready to empower your community?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Join the movement of communities using Crowdstaking to fund
              real-world impact. Deploy your economic toolkit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 rounded-xl"
              >
                Deploy Your Instance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/crowdstaking-logo.jpg"
                  alt="Crowdstaking"
                  width={24}
                  height={24}
                  className="rounded"
                />
                <span className="font-[var(--font-kufam)] text-foreground">Crowdstaking</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                An open-source economic primitive for participatory community
                funding. A project by{" "}
                <a
                  href="https://bread.coop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Bread Cooperative
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-foreground text-sm font-medium">Protocol</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Audits
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Governance
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-foreground text-sm font-medium">Community</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Discord
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </div>
                <div>
                  <a
                    href="https://bread.coop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Bread Cooperative
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-foreground text-sm font-medium">Support</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Developer Portal
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Status
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
            <p>
              {"© "}2024 Crowdstaking by{" "}
              <a
                href="https://bread.coop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Bread Cooperative
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
