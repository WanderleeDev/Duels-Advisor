interface Props {
  pend_desc: string;
  monster_desc: string;
}

export default function PendulumDescription({
  monster_desc,
  pend_desc,
}: Props) {
  return (
    <div className="grid gap-3">
      <span>
        <strong>[Pendulum] </strong>
        {pend_desc}
      </span>
      <span>
        <strong>[Effect] </strong>
        {monster_desc}
      </span>
    </div>
  );
}
