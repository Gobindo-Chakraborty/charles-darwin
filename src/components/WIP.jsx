export default function WIP() {
  return (
    <div className="flex justify-center my-5">
      <div className="inline-flex gap-2 border pl-2.5 pr-3 py-2 rounded-3xl border-wip bg-wip">
        <img
          className="w-5 h-5 rounded-2xl"
          src="/images/gbc.jpg"
          alt="GBC image"
        />
        <p className="text-sm text-wip">Work in progress</p>
      </div>
    </div>
  );
}
