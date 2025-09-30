import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, User, CreditCard, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoanTypes = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/#application");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Types</h1>
            <p className="text-xl text-muted-foreground">
              Flexible financing solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-primary transition-all">
              <CardHeader>
                <Briefcase className="h-12 w-12 mb-4 text-secondary" />
                <CardTitle className="text-2xl">Business Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fuel your entrepreneurial vision with capital designed for growth. Whether you're starting a new venture, expanding operations, or managing cash flow, we provide the resources you need.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Startup funding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Business expansion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Equipment purchase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Working capital</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-primary transition-all">
              <CardHeader>
                <User className="h-12 w-12 mb-4 text-secondary" />
                <CardTitle className="text-2xl">Personal Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Life happens, and sometimes you need financial flexibility. Our personal loans help you handle life's important moments with confidence and ease.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Home improvements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Medical expenses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Wedding or events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Travel and leisure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-primary transition-all">
              <CardHeader>
                <CreditCard className="h-12 w-12 mb-4 text-secondary" />
                <CardTitle className="text-2xl">Debt Consolidation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Simplify your finances by consolidating multiple high-interest debts into one manageable payment with a lower rate. Take control of your financial future.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Credit card consolidation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Lower monthly payments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Reduced interest rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Simplified repayment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-primary transition-all">
              <CardHeader>
                <GraduationCap className="h-12 w-12 mb-4 text-secondary" />
                <CardTitle className="text-2xl">Educational Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Invest in yourself or your loved ones' future. Our educational loans make quality education accessible and affordable with flexible repayment options.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>College tuition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Professional training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Certification programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Graduate studies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Loan Type is Right for You?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help you find the perfect financing solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleApply} size="lg" className="bg-secondary hover:bg-secondary/90">
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="https://wa.me/16463820985" target="_blank" rel="noopener noreferrer">
                  Contact Us on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTypes;
