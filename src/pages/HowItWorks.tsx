import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/#application");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-muted-foreground">
              Getting funded with WealthPath is simple, fast, and transparent
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-4">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Step 1: Apply Online</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">
                        Fill out our simple online application form. It takes just 2-3 minutes. We'll ask for basic information about you, your loan needs, and your credit profile.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground rounded-full p-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Step 2: Get Instant Pre-Approval</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">
                        Receive a pre-approval decision within 60 seconds. Our advanced system evaluates your application instantly and provides you with loan options tailored to your needs.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full p-4">
                    <Banknote className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Step 3: Receive Funds in 24–72 Hours</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">
                        Once approved, complete the final verification process and receive your funds directly to your bank account within 24-72 hours. Start using your capital immediately.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Ready to Get Started?</h2>
            <p className="text-center text-muted-foreground mb-6">
              Join thousands of satisfied customers who have funded their dreams with WealthPath
            </p>
            <div className="flex justify-center">
              <Button onClick={handleApply} size="lg" className="bg-gradient-cta">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
