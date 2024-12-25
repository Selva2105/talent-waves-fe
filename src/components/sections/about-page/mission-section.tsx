export default function MissionSection() {
    return (
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-blue-500 font-medium">Our Mission</span>
            <h2 className="text-4xl font-bold leading-tight">
              Our mission is help people to find the perfect job.
            </h2>
            <p className="text-gray-500 text-lg">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam 
              metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum 
              maximus nec justo sed maximus.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <img
              src="/images/mission.svg?height=400&width=300"
              alt="Illustration of people connecting"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    )
  }
  
  