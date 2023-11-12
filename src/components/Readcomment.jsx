import React from "react";
import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";

function Readcomment() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://sheet.best/api/sheets/1afbe746-5400-45b5-8e9d-605c76ca84cc")
      .then(response => setData(response))
      
  }, []);
  if(!data){
return <div/>;
  }
  console.log(data);
  return (
    <Table className="mt-20">
    <Table.Head>
      <Table.HeadCell>Name</Table.HeadCell>
      <Table.HeadCell>Comments</Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      {data.data.map((val, index) => (
        <TableRow key={index}>
          <Table.Cell>{val.Name}</Table.Cell>
          <Table.Cell>{val.Comments}</Table.Cell>
        </TableRow>
      ))}
    </Table.Body>
  </Table>
  );
}

export default Readcomment;

// import React, { useState, useEffect } from "react";
// import { Table } from "flowbite-react";
// import axios from "axios";
// import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";

// function Readcomment() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://sheet.best/api/sheets/1afbe746-5400-45b5-8e9d-605c76ca84cc")
//       .then((response) => setData(response.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
    // <Table className="mt-20">
    //   <Table.Head>
    //     <Table.HeadCell>Name</Table.HeadCell>
    //     <Table.HeadCell>Comments</Table.HeadCell>
    //   </Table.Head>
    //   <Table.Body className="divide-y">
    //     {data.map((val, index) => (
    //       <TableRow key={index}>
    //         <Table.Cell>{val.Name}</Table.Cell>
    //         <Table.Cell>{val.Comments}</Table.Cell>
    //       </TableRow>
    //     ))}
    //   </Table.Body>
    // </Table>
//   );
// }

// export default Readcomment;

