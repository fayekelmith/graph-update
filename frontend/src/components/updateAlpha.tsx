import { updateAlpha } from "../api";

function UpdateAlphaButton() {
  const handleClick = async () => {
    const result = await updateAlpha();
    alert(result.status);
  };

  return <button onClick={handleClick}>Update Alpha</button>;
}

export default UpdateAlphaButton;
