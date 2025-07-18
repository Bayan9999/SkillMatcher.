import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/next.svg" alt="SkillMatch Logo" width={40} height={40} />
            <span className="text-2xl font-bold">SkillMatch</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Connect Your Micro Skills with Perfect Job Opportunities
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-10 text-muted-foreground">
          SkillMatch helps you showcase your micro skills and find jobs that truly match your expertise.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/signup">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/jobs">
            <Button variant="outline" size="lg">Browse Jobs</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
