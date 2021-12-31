import { useLoaderData } from "remix";

export function loader({ request }) {
  const url = new URL(request.url);
  return `${url.host}/AIC-0001.pptx`;
}

export default function Index() {
  const OFFICE_FILE_URL = useLoaderData();

  console.log(OFFICE_FILE_URL);
  
  return (
    <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${OFFICE_FILE_URL}`} width='1000px' height='1000px' frameBorder='0'></iframe>
  );
}