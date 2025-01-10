import React, { useEffect, useState } from "react";
import { ContainedButton } from "../../../components/Button";
import DashboardLayout from "../../../layout/DashboardLayout";
import TableHeader from "./components/TableHeader";
import { Link } from "react-router-dom";
import TableItem from "./components/TableItem";
import { toast } from "react-toastify";
import { LinearProgress, Paper, Table, TableBody, TableContainer, TableFooter, TablePagination, TableRow } from "@mui/material";
import { fetchUserRequests } from "../../../api/requests";

const Request = () => {
  const [requests, setRequests] = useState();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getUserRequests = async () => {
    setLoading(true);
    const { data, error, message } = await fetchUserRequests(page + 1);
    console.log(data)
    setLoading(false);

    if (error) {
      toast.error(message);
      return;
    }
    else{
      setRequests(data);
    }
  };
  useEffect(() => {
    getUserRequests();
  }, [page]);
  return (
    <DashboardLayout>
      <div className="flex justify-between item-center mt-4 flex-wrap">
        <h2 className="text-2xl font-semibold mb-3 mr-3">My Requests</h2>
        <Link to="/request/calibration">
          <ContainedButton text="Request Calibration" className="mb-3" />
        </Link>
      </div>
      <TableContainer component={Paper}>
      {loading && <LinearProgress /> }
      <Table>
        <TableHeader />
          <TableBody>
            {
              requests?.docs?.map((item, index) => (
                <TableItem index={index} item={item} key={index} />
              ))
            }
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[requests?.limit]}
                count={requests?.totalPages}
                rowsPerPage={requests?.limit}
                page={page}
                onPageChange={(e, page) => setPage(page)}
              />
            </TableRow>
          </TableFooter>
          </Table>
        </TableContainer>
    </DashboardLayout>
  );
};

export default Request;
