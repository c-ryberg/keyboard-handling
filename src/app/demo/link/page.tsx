"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Keyboard } from "lucide-react";

export default function DemoLinkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardContent className="p-8 space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <Keyboard className="h-6 w-6 text-blue-500 absolute -bottom-1 -right-1 bg-white dark:bg-gray-900 rounded-full p-1" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
              🎉 You found a working link!
            </h1>
            <p className="text-muted-foreground text-balance">
              Since this is just a demo page, there's nothing else to see here.
            </p>
          </div>

          <div className="pt-4">
            <Button
              onClick={() => window.history.back()}
              className="gap-2"
              size="lg"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
