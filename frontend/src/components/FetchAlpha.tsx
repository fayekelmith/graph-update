import { fetchAlpha } from "../api";

function FetchAlphaButton() {
  const handleClick = async () => {
    const result = await fetchAlpha();
    alert(result.message);
  };

  return <button onClick={handleClick}>Fetch Alpha</button>;
}

export default FetchAlphaButton;
