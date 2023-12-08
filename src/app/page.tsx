import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <p className="text-center">Risqi</p>
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>A little about me</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Expertise</CardTitle>
          <CardDescription>Some technologies I've worked with</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

      <p className="text-center">Some pictures describe my hobbies</p>

      <Card>
        <CardHeader>
          <CardTitle>My Public Accounts</CardTitle>
          <CardDescription>The places to find me</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </>
  );
}
