import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgetPassword() {
  return (
    <>
      <div className=" loginpage bg-slate-200">
        <Card className=" max-w-sm  p-7 ">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Forget Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="enter email"
                  required
                  className="w-[100%]"
                />
              </div>

              <Button type="submit" className="w-full">
                Forget Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
