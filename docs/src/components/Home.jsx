import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import GHPSLogo from "../assets/GHPSLogo.jpeg"

export default function HomePage() {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      window.location.href = `/GitProfileStats/#/profile/${username}`;
    }
  };

  return (

    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 hide-overflow">
      {/* Hero Section */}
      <img src={GHPSLogo} style={{width: "300px"}}/>
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">GitProfileStats</h1>
        <p className="text-lg text-gray-400 mb-6">
          Analyze and visualize GitHub profiles with ease.
        </p>
        <div className="flex gap-2">
          <Input
            className="bg-gray-800 text-white border-gray-600"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            className="px-4 py-2 w-auto bg-white text-black text-sm rounded-lg hover:bg-gray-200"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Repositories", desc: "See all repositories & insights" },
          { title: "Stats", desc: "Github Profile Stats" },
          { title: "Followers", desc: "Check network & influence" },
          { title: "Languages", desc: "Detect languages used" },
          { title: "Stars & Forks", desc: "Track repo popularity" },
        ].map((feature, index) => (
          <Card key={index} className="bg-gray-800 text-white border-gray-700">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
