import React from "react";
import "./TopicList.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Edit,
  RemoveCircle,
  ArrowUpward,
  ArrowDownward
} from "@material-ui/icons";

class TopicList extends React.Component {
  render() {
    const rows = [
      { name: "হাওর বাঁচাও" },
      { name: "নদী বাঁচাও" },
      { name: "সাইকেল লেন" },
      { name: "বিষমুক্ত খাদ্য" }
    ];

    return (
      <div className="TopicList">
        <Paper className="TopicTable">
          <Paper className="TopicTableHeader">Topics</Paper>
          <TableContainer className="TopicTable">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">
                      <Edit />
                      <RemoveCircle />
                      <ArrowDownward />
                      <ArrowUpward />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  }
}

export default TopicList;
