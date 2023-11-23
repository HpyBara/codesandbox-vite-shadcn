import React from "react";
import { HolyLayout } from "@/components/layout/holy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function App() {
  return (
    <HolyLayout header={`Header`} footer={`Footer`}>
      <Info />
    </HolyLayout>
  );
}

const Info = () => (
  <Card>
    <CardHeader>
      <CardTitle>Codesandbox Template</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-6">
      <Item name="React" />
      <Item name="Vite" />
      <Item name="TypeScript" />
      <Item name="Tailwind" />
      <Item name="shadcn/ui" />
    </CardContent>
  </Card>
);

const Item: React.FC<{ name: string }> = ({ name }) => {
  const id = React.useId();

  return (
    <div className="flex items-center justify-between space-x-2">
      <Label htmlFor={id} className="flex flex-col space-y-1 text-xl">
        <span>{name}</span>
      </Label>
      <Switch id={id} defaultChecked />
    </div>
  );
};
