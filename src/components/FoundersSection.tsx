import { Mail, Phone, Instagram, MessageCircle, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import deepakImg from "@/assets/deepak.jpg";
import viyashImg from "@/assets/viyash.jpg";
import akashImg from "@/assets/akash.jpg";

const founders = [
	{
		name: "Deepak U K",
		role: "Founder / Experience Lead",
		phone: "+91 9345211194",
		email: "dileepdeepakudaya@gmail.com",
		instagram: "@deepak_17._",
		whatsapp: "https://wa.me/919345211194",
		linkedin: "@ukdeepak",
		website: "https://deepakuk.me",
		avatar: deepakImg,
	},
	{
		name: "Viyash S",
		role: "Founder / Creative Lead",
		phone: "+91 8220334059",
		email: "viyashsomasundaram@gmail.com",
		instagram: "@viyazh_42",
		whatsapp: "https://wa.me/918220334059",
		linkedin: "@viyash-s-680707324",
		avatar: viyashImg,
	},
	{
		name: "Akash R",
		role: "Founder / Operations Lead",
		phone: "+91 6384241882",
		email: "ash268201@gmail.com",
		instagram: "@mr.collapser_777",
		whatsapp: "https://wa.me/916384241882",
		linkedin: "@akash-r-789868324",
		avatar: akashImg,
	},
];

const FoundersSection = ({ id }: { id?: string }) => {
	return (
		<section id={id} className="py-32 px-6 bg-gradient-to-b from-background to-card/30">
			<div className="max-w-6xl mx-auto">
				<h2 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-20 text-gradient">
					Meet Our Team
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{founders.map((founder, index) => (
						<div
							key={index}
							className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-500 animate-fade-in"
							style={{ animationDelay: `${index * 0.15}s` }}
						>
							<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl font-playfair font-bold text-primary-foreground">
								{founder.avatar ? (
									<img
										src={founder.avatar}
										alt={founder.name}
										className="w-32 h-32 rounded-full object-cover"
									/>
								) : (
									founder.name.charAt(0)
								)}
							</div>

							<h3 className="font-playfair text-2xl font-semibold mb-2 text-foreground">
								{founder.name}
							</h3>

							<p className="text-primary mb-6 font-medium">
								{founder.role}
							</p>

							<div className="space-y-3 text-sm text-muted-foreground mb-6">
								<div className="flex items-center justify-center gap-2">
									<Phone className="w-4 h-4" />
									<span>{founder.phone}</span>
								</div>
								<div className="flex items-center justify-center gap-2">
									<Mail className="w-4 h-4" />
									<span className="text-xs">{founder.email}</span>
								</div>
							</div>

							<div className="flex gap-3 justify-center">
								<Button
									size="sm"
									variant="outline"
									className="glass-card hover:bg-card/50"
									asChild
								>
									<a
										href={founder.whatsapp}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="WhatsApp"
									>
										<MessageCircle className="w-4 h-4" />
									</a>
								</Button>
								<Button
									size="sm"
									variant="outline"
									className="glass-card hover:bg-card/50"
									asChild
								>
									<a
										href={`https://instagram.com/${founder.instagram.slice(1)}`}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Instagram"
									>
										<Instagram className="w-4 h-4" />
									</a>
								</Button>

								<Button
									size="sm"
									variant="outline"
									className="glass-card hover:bg-card/50"
									asChild
								>
									<a
										href={
											founder.linkedin.startsWith("@")
												? `https://www.linkedin.com/in/${founder.linkedin.slice(1)}`
												: founder.linkedin
										}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="LinkedIn"
									>
										<Linkedin className="w-4 h-4" />
									</a>
								</Button>

								{founder.website && (
									<Button
										size="sm"
										variant="outline"
										className="glass-card hover:bg-card/50"
										asChild
									>
										<a
											href={founder.website}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Website"
										>
											<Globe className="w-4 h-4" />
										</a>
									</Button>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FoundersSection;
