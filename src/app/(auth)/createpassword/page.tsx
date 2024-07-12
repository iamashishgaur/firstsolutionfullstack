import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreatePassword() {
  return (
    <>
      <div className=" loginpage bg-slate-200">
        <Card className=" max-w-sm  p-7 ">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Create Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="********"
                />
                <Label htmlFor="email"> Confirm Password</Label>
                <Input
                  id="confirmpassword"
                  type="password"
                  required
                  placeholder="********"
                />
              </div>

              <Button type="submit" className="w-full">
                Create new Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
