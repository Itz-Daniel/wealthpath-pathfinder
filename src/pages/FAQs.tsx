import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our loan services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Who is eligible to apply for a loan?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We welcome applicants from around the world! Our loans are available to individuals and businesses globally, with a few exceptions. Currently, we are not accepting applications from Nigeria, India, Pakistan, and Indonesia. As long as you meet basic credit requirements and can verify your identity, you're encouraged to apply.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What documents are required for the application?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The initial application requires minimal information—just your basic contact details, loan amount, purpose, and approximate credit score. If pre-approved, we'll request additional documentation such as proof of income, identification, and bank statements to complete the final verification process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How fast can I really get funded?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can receive a pre-approval decision within 60 seconds of submitting your application. Once approved and you've completed final verification, funds are typically disbursed to your bank account within 24-72 hours. In some cases, funding can happen even faster depending on your bank's processing times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What are the interest rates?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Interest rates start as low as 2% for qualified applicants with excellent credit. Your final rate depends on factors including your credit score, loan amount, repayment term, and purpose. We offer competitive, fixed-rate loans so your monthly payment stays consistent throughout the loan term.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Is my personal information secure?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. We use bank-level encryption to protect all your data. Your information is never shared with third parties without your explicit consent. We comply with international data protection standards and take your privacy seriously.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Can I repay my loan early without penalties?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We encourage early repayment and do not charge prepayment penalties. If your financial situation improves and you want to pay off your loan ahead of schedule, you're free to do so and may even save on interest charges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What if I have bad credit or no credit history?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We consider applicants with various credit profiles. While a strong credit score helps secure better rates, we look at your overall financial picture. Even if you have fair credit or limited credit history, you may still qualify. Apply to see what options are available to you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How do I check my application status?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                After submitting your application, you'll receive immediate feedback. For further updates or questions about your application status, you can contact us directly via WhatsApp at +1 646 382 0985 or email us at wealthpathltd@yahoo.com. Our team typically responds within minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What can I use the loan for?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our loans are versatile and can be used for a wide range of purposes including business startup or expansion, debt consolidation, education, home improvements, medical expenses, weddings, travel, and more. As long as the purpose is legal and legitimate, we're here to help fund it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How does the referral program work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                When you refer a friend or family member who successfully receives funding through WealthPath, you can earn a cash bonus of up to $2,500. Simply have them mention your name during their application. Once their loan is funded, we'll process your referral bonus. Terms and bonus amounts vary based on the loan size.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-muted/30 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is ready to help you with any questions or concerns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                variant="default"
                size="lg"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="https://wa.me/16463820985" target="_blank" rel="noopener noreferrer">
                  WhatsApp Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
