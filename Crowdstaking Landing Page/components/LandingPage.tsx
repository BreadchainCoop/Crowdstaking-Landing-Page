import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Star, ArrowRight, Users, Target, Zap, Shield, Coins, TrendingUp } from "lucide-react";
import { InterestCalculator } from "./InterestCalculator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import crowdstakingLogo from "figma:asset/6c4781c0da2b437683c04b5fd126dde729265635.png";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center px-4">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <img src={crowdstakingLogo} alt="Crowdstaking" className="h-6 w-6" />
              <span>Crowdstaking</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#features" className="transition-colors hover:text-foreground/80">
                  Features
                </a>
                <a href="#how-it-works" className="transition-colors hover:text-foreground/80">
                  How it Works
                </a>
                <a href="#get-started" className="transition-colors hover:text-foreground/80">
                  Get Started
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Documentation
              </Button>
              <Button size="sm">
                Deploy Your Instance
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-8xl tracking-tight">
                  <span className="text-primary">Crowdstaking</span>
                  <br />
                  <span className="text-secondary italic text-2xl md:text-4xl">Turning shared funds into shared futures.</span>
                </h1>
                <p className="text-xl text-foreground max-w-[600px]">
                  Crowdstaking transforms any pool of money into an interest-generating engine to funds your group's shared goals. Your deposited funds remain safely staked and fully withdrawable—only the interest gets allocated.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Deploy Your Instance
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary hover:bg-primary/5">
                  View Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Open source protocol</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Fully customizable</span>
                </div>
                <div className="flex items-center space-x-2">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl">
              Fund what's meaningful to you
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
            {/* Key Concepts Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6 text-primary">Key Concepts</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg mb-2">Interest Distribution</h4>
                    <p className="text-foreground">
                      The protocol accumulates interest and distributes it to each user.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-2">Cycle-Based Operations</h4>
                    <p className="text-foreground">
                      The system operates in fixed-length cycles (measured in blocks), providing predictable distribution schedules while allowing for regular reallocation of resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Principles Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6 text-secondary">Design Principles</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg mb-2">Accessibility</h4>
                    <p className="text-foreground">
                      Any community can deploy and customize their own instance
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-2">Decentralization</h4>
                    <p className="text-foreground">
                      No single entity controls interest distribution
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-2">Flexibility</h4>
                    <p className="text-foreground">
                      Support for adding/removing interest recipients and adjusting parameters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl">
              Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl">Automated Yield Generation</h3>
                  <p className="text-foreground">
                    Community members deposit funds to generate interest on the principal.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl">White-Label Ready</h3>
                  <p className="text-foreground">
                    Deploy with your organization's branding and customize the interface to match your community's needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl">Interest Optimization</h3>
                  <p className="text-foreground">
                    Advanced strategies automatically rebalance funds across DeFi protocols to maximize community returns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl">Project Tracking</h3>
                  <p className="text-foreground">
                    Monitor funded projects with milestone-based payments and transparent progress reporting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Under the Hood Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl">
              Under the Hood
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              The Crowdstaking application is a smart contract system on Gnosis Chain that accepts users' xDAI and converts it into sDAI (yield-bearing stablecoins). In exchange, stakers receive project-specific tokens minted at a 1:1 ratio with their collateralized xDAI. All interest earned on the sDAI funds their shared goal.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl">
                  Fundraising for free: from shared funds to shared futures
                </h2>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4>Community pools assets</h4>
                    <p className="text-foreground">
                      Members deposit funds to the shared community pool in your own branded interface.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4>Automated interest generation</h4>
                    <p className="text-foreground">
                      Funds are automatically generating yield through overcollateralized loans.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4>Community decides on funding</h4>
                    <p className="text-foreground">
                      Interest is allocated to your community's shared goal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <h4>Projects get funded</h4>
                    <p className="text-foreground">
                      Projects receive funding while members retain their original principal amount.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl">
              Start funding your community goal today
            </h2>
            <p className="text-xl text-foreground max-w-[600px] mx-auto">
              Crowdstaking is completely free and open source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Quick Deploy Option */}
            <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <Badge variant="secondary" className="w-fit">Recommended</Badge>
                  <h3 className="text-xl">Quick Deploy</h3>
                  <p className="text-foreground text-sm">
                    Get your community protocol running in minutes with our hosted solution. Perfect for communities who want to focus on their mission, not technical setup.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="text-sm text-foreground">Timeline</p>
                    <p className="text-base">24-48 hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Technical knowledge</p>
                    <p className="text-base">None required</p>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Start Quick Deploy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Self-Deploy Option */}
            <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-secondary/20">
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <Badge variant="outline" className="w-fit border-secondary text-secondary">Advanced</Badge>
                  <h3 className="text-xl">Self-Deploy</h3>
                  <p className="text-foreground text-sm">
                    Deploy and customize your own instance with full control over smart contracts, infrastructure, and governance parameters.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="text-sm text-foreground">Timeline</p>
                    <p className="text-base">1-2 weeks</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Technical knowledge</p>
                    <p className="text-base">Solidity & Web3</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="lg" className="w-full border-secondary hover:bg-secondary/5">
                    View Documentation
                  </Button>
                  <Button variant="outline" size="lg" className="w-full border-secondary hover:bg-secondary/5">
                    Clone Repository
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-foreground mb-4">
              Need help deciding? Our team is here to guide you.
            </p>
            <Button variant="ghost" size="lg" className="text-lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl">
              Ready to empower your community?
            </h2>
            <p className="text-xl opacity-90">
              Join the movement of communities using Crowdstaking to fund real-world impact. 
              Deploy your economic toolkit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Deploy Your Instance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 hover:bg-primary-foreground/10">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={crowdstakingLogo} alt="Crowdstaking" className="h-6 w-6" />
                <span>Crowdstaking</span>
              </div>
              <p className="text-foreground">
                An open-source economic primitive for participatory community funding.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4>Protocol</h4>
              <div className="space-y-2 text-foreground">
                <div><a href="#" className="hover:text-foreground">Documentation</a></div>
                <div><a href="#" className="hover:text-foreground">GitHub</a></div>
                <div><a href="#" className="hover:text-foreground">Audits</a></div>
                <div><a href="#" className="hover:text-foreground">Governance</a></div>
              </div>
            </div>

            <div className="space-y-4">
              <h4>Community</h4>
              <div className="space-y-2 text-foreground">
                <div><a href="#" className="hover:text-foreground">Discord</a></div>
                <div><a href="#" className="hover:text-foreground">Twitter</a></div>
                <div><a href="#" className="hover:text-foreground">Blog</a></div>
                <div><a href="#" className="hover:text-foreground">Case Studies</a></div>
              </div>
            </div>

            <div className="space-y-4">
              <h4>Support</h4>
              <div className="space-y-2 text-foreground">
                <div><a href="#" className="hover:text-foreground">Help Center</a></div>
                <div><a href="#" className="hover:text-foreground">Contact</a></div>
                <div><a href="#" className="hover:text-foreground">Developer Portal</a></div>
                <div><a href="#" className="hover:text-foreground">Status</a></div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t text-center text-foreground">
            <p>&copy; 2024 Crowdstaking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}