import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  country: z.string().min(1, "Please select your country"),
  loanAmount: z.string().min(1, "Please select loan amount"),
  loanPurpose: z.string().trim().min(10, "Please provide loan purpose (min 10 characters)").max(500),
  creditScore: z.string().min(1, "Please select your credit score range"),
});

type FormValues = z.infer<typeof formSchema>;

const LoanApplicationForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      loanAmount: "",
      loanPurpose: "",
      creditScore: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Validate country restrictions
    const restrictedCountries = ["Nigeria", "India", "Pakistan", "Indonesia"];
    if (restrictedCountries.includes(data.country)) {
      toast.error("Application Unavailable", {
        description: "We're sorry, but we're not currently accepting applications from your country.",
      });
      return;
    }

    // Create WhatsApp message with proper encoding
    const message = encodeURIComponent(
      `New Loan Application:\n\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nCountry: ${data.country}\nLoan Amount: ${data.loanAmount}\nLoan Purpose: ${data.loanPurpose}\nCredit Score: ${data.creditScore}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/16463820985?text=${message}`, "_blank");

    toast.success("Application Submitted!", {
      description: "We'll review your application and get back to you within 60 seconds via WhatsApp.",
    });

    form.reset();
  };

  return (
    <section id="application" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Pre-Approved in 60 Seconds</h2>
          <p className="text-muted-foreground">Fill out the form below and receive an instant decision</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Nigeria">Nigeria</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="Pakistan">Pakistan</SelectItem>
                      <SelectItem value="Indonesia">Indonesia</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="loanAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Amount</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select amount range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="$10,000 - $50,000">$10,000 - $50,000</SelectItem>
                      <SelectItem value="$50,000 - $100,000">$50,000 - $100,000</SelectItem>
                      <SelectItem value="$100,000 - $250,000">$100,000 - $250,000</SelectItem>
                      <SelectItem value="$250,000 - $500,000">$250,000 - $500,000</SelectItem>
                      <SelectItem value="$500,000 - $1,000,000">$500,000 - $1,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="loanPurpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Purpose</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe what you'll use the loan for..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="creditScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approximate Credit Score</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your credit score range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Excellent (750+)">Excellent (750+)</SelectItem>
                      <SelectItem value="Good (700-749)">Good (700-749)</SelectItem>
                      <SelectItem value="Fair (650-699)">Fair (650-699)</SelectItem>
                      <SelectItem value="Poor (Below 650)">Poor (Below 650)</SelectItem>
                      <SelectItem value="No Credit History">No Credit History</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-gradient-cta" size="lg">
              Get My Instant Decision
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default LoanApplicationForm;
