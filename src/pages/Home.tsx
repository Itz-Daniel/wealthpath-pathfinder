import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, DollarSign, Globe, RefreshCw, Clock, TrendingUp } from "lucide-react";
import LoanApplicationForm from "@/components/LoanApplicationForm";
import heroImage from "@/assets/hero-finance.jpg";

const Home = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("application");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Need Funding? Get a Decision in 60 Seconds.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Loans from $10K - $1M | Fast, Flexible, Global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToForm} size="lg" className="bg-secondary hover:bg-secondary/90">
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="https://wa.me/16463820985" target="_blank" rel="noopener noreferrer">
                  Message Us on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Scrolling! This Could Be the Solution You've Been Waiting For.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Are rising costs holding your business or dreams back?
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Launching a startup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Consolidating debt</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Making a major investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Furthering your education</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-xl font-semibold mt-8">
              WealthPath provides the capital you need to move forward—fast.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Thousands Choose WealthPath</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <CardTitle className="text-xl">Lightning-Fast Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get pre-approval in 60 seconds & funded in as little as 24–72 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <CardTitle className="text-xl">Unbeatable Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fixed interest rates starting as low as 2% (based on credit profile).
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <RefreshCw className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <CardTitle className="text-xl">Total Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Borrow $10K to $1M with repayment plans up to 3 years.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <CardTitle className="text-xl">Global Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Applicants worldwide are eligible.* Limited restrictions apply.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 mx-auto mb-6 text-accent-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent-foreground">
            🎉 Refer a Friend, Earn Up to $2,500
          </h2>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
            Refer someone who gets funded and receive a cash bonus of up to $2,500.
          </p>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">⏳ ACT NOW – OFFER ENDS SOON!</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We're accepting a limited number of applications this week. Message us right now to secure your spot and get an instant decision.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive"
            asChild
          >
            <a href="https://wa.me/16463820985" target="_blank" rel="noopener noreferrer">
              Message Us Now on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Application Form */}
      <LoanApplicationForm />
    </div>
  );
};

export default Home;
