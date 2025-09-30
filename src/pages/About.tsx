import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About WealthPath Finance</h1>
            <p className="text-xl text-muted-foreground">
              Your Partner in Growth, Prosperity, and Financial Freedom
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="h-8 w-8 text-secondary" />
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At WealthPath Finance Ltd., we believe that financial barriers should never stand in the way of your dreams. Our mission is simple: to provide fast, flexible, and fair financing solutions that empower individuals and businesses worldwide to achieve their goals and unlock their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="h-8 w-8 text-secondary" />
                  Who We Serve
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We proudly serve a diverse global community of dreamers, doers, and visionaries:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span><strong>Entrepreneurs</strong> launching innovative startups and scaling existing businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span><strong>Students</strong> investing in education and professional development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span><strong>Investors</strong> seeking capital to seize opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span><strong>Individuals</strong> consolidating debt or funding personal milestones</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-secondary" />
                  What Makes Us Different
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">⚡ Speed & Efficiency</h3>
                    <p>Traditional lenders make you wait weeks. We give you a decision in 60 seconds and funding in 24-72 hours.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">💎 Competitive Rates</h3>
                    <p>We offer some of the most competitive rates in the industry, starting as low as 2% for qualified applicants.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">🌍 Global Reach</h3>
                    <p>While many lenders only serve local markets, we welcome applicants from around the world.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">🤝 Personalized Service</h3>
                    <p>We treat every application with care and work to find the best solution for your unique situation.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">🔒 Security & Trust</h3>
                    <p>Your information is protected with bank-level encryption, and we never share your data without permission.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe2 className="h-8 w-8 text-secondary" />
                  Our Commitment
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to transparency, integrity, and putting our customers first. Every decision we make is guided by one question: "How can we better serve the people who trust us with their financial future?" This commitment has helped thousands of individuals and businesses achieve their goals, and we're just getting started.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Let's build your financial future together
            </p>
            <Button
              onClick={() => navigate("/#application")}
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
