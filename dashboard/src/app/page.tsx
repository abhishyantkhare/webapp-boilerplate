"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle, User } from "lucide-react";
import { useState } from "react";

type Agent = {
  id: string;
  name: string;
  type: string;
  tasks: number;
};

export default function AgentList() {
  const [agents, setAgents] = useState<Agent[]>([
    { id: "1", name: "Data Analyst", type: "Analysis", tasks: 5 },
    { id: "2", name: "Customer Support", type: "Support", tasks: 12 },
  ]);

  const addAgent = () => {
    const newAgent: Agent = {
      id: (agents.length + 1).toString(),
      name: `New Agent ${agents.length + 1}`,
      type: "General",
      tasks: 0,
    };
    setAgents([...agents, newAgent]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Agents</h1>
        <Button onClick={addAgent}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create Agent
        </Button>
      </div>

      {agents.length === 0 ? (
        <Card className="text-center p-6">
          <CardHeader>
            <CardTitle>No Agents Yet</CardTitle>
            <CardDescription>
              Create your first agent to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={addAgent} className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" /> Create Your First Agent
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <Card key={agent.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" /> {agent.name}
                </CardTitle>
                <CardDescription>{agent.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Tasks completed: {agent.tasks}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
