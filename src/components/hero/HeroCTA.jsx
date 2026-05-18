import Button from "../common/Button";

function HeroCTA() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <Button>
        Start Free Trial
      </Button>

      <Button variant="secondary">
        Live Demo
      </Button>
    </div>
  );
}

export default HeroCTA;