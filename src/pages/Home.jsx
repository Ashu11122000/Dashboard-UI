import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";

function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">UI Foundation Test</h1>

      <div className="flex gap-4 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
      </div>

      <div className="max-w-md">
        <Input label="Email" placeholder="Enter your email" />
      </div>

      <div className="flex gap-4">
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
      </div>

      <Card>
        <h2 className="text-xl font-semibold">Reusable Card</h2>
        <p className="mt-2">This is a reusable UI card.</p>
      </Card>
    </div>
  );
}

export default Home;
