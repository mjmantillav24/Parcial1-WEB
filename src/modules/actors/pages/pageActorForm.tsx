import ActorList from "../ui/ActorList";
import CreateActorForm from "../ui/CreateActorForm";
  

export default function CreateActorPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Create Actor
      </h1>

      <CreateActorForm />

      <h2 className="text-xl font-semibold mt-10 mb-4">
        Created Actors
      </h2>

      <ActorList />
    </div>
  );
}