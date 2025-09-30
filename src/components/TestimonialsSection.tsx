import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Small Business Owner",
    image: testimonial1,
    rating: 5,
    text: "WealthPath made my dream of opening a bakery come true! The entire process was incredibly smooth - I got approved in under a minute and had the funds in my account within 48 hours. Their team was supportive every step of the way. Highly recommend!",
  },
  {
    name: "Carlos Rodriguez",
    role: "Tech Entrepreneur",
    image: testimonial2,
    rating: 5,
    text: "I've worked with several lenders before, but WealthPath stands out. The rates were unbeatable, and the flexibility in repayment terms gave me peace of mind. Thanks to them, my startup is now thriving. Best financial decision I've made!",
  },
  {
    name: "Emily Chen",
    role: "Graduate Student",
    image: testimonial3,
    rating: 5,
    text: "As an international student, I was worried about getting approved for education financing. WealthPath not only approved me quickly but also offered amazing rates. Their global approach is what sets them apart. Forever grateful!",
  },
  {
    name: "Michael Johnson",
    role: "Real Estate Investor",
    image: testimonial4,
    rating: 5,
    text: "I needed to consolidate multiple high-interest debts, and WealthPath came through with a solution that saved me thousands in interest. The 60-second decision wasn't just marketing - it really happened! Professional, fast, and reliable.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have achieved their financial goals with WealthPath
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-primary transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {testimonial.role}
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-secondary text-secondary" />
            <span className="font-semibold">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">from 2,500+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
