const AboutUs = () => {
	return (
		<section
			id="about-us"
			className="section-transition bg-springGray">
			<div className="container mx-auto px-4 py-16">
				<h2 className="text-center text-springBlue mb-12">Organisers</h2>

				<div className="flex flex-col gap-12 max-w-6xl mx-auto">
					{/* Organization Info */}
					<div className="space-y-6">
						<div className="flex flex-col lg:flex-row gap-8 items-center">
							<div className="space-y-6 lg:w-2/3 mx-4">
								<p className="text-springText/80 ">
									The CDTM Valencia Hackathon is organized by the Center for
									Digital Technology and Management (CDTM) in Valencia, a joint
									institution of excellence by Polythecnic University of
									Valencia (UPV) and Universitat de Valencia (UV). CDTM is the
									place to educate, connect & empower the innovators of
									tommorow.
								</p>
								<p className="text-springText/80">
									CDTM alumni in Germany have founded 20% of all German
									unicorns, raised billions in venture capital, and lead
									cutting-edge research at institutions like MIT, DeepMind, and
									Stanford. All of this has been achieved with just 50 students
									joining each year. Now, CDTM Valencia marks the first
									expansion of this unique model to Spain and we are excited to
									bring its proven success to the heart of Valencia.
								</p>
								<div className="flex gap-4 mt-4">
									<a
										href="https://cdtm.com/valencia/whoarewe"
										target="_blank"
										rel="noopener noreferrer"
										className="text-springBlue hover:text-springBlue/80 underline">
										Learn more about CDTM Valencia
									</a>
								</div>
							</div>
							<div className="lg:w-1/3 mr-4">
								<img
									src="/images/cdtm.png"
									alt="CDTM Valencia Logo"
									className="w-full max-h-[300px] rounded-lg mx-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
