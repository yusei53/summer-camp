import getGroups from "@/actions/getGroups";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { User } from "@prisma/client";
import React from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
type TProps = {
  currentUserId: User["id"] | undefined;
};

const GroupList: React.FC<TProps> = async ({ currentUserId }) => {
  if (!currentUserId) return;
  const groups = await getGroups(currentUserId);

  if (!groups) return <div>グループがありません</div>;

  return (
    <Grid
      container
      spacing={{ xs: 3, md: 5 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: 10,
      }}
    >
      {groups.map((group) => (
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            key={group.id}
            sx={{
              width: 180,
              height: 180,
              borderRadius: "16px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EditCalendarIcon sx={{ fontSize: 40, mt: 4, mb: 3 }} />
            </CardContent>
            <Box
              display="flex"
              flexDirection="row"
              alignItems={"flex-start"}
              ml={1}
            >
              <FiberManualRecordIcon sx={{ fontSize: 20 }} />
              <Typography component="div">{group.groupName}</Typography>
            </Box>
            <AssignmentTurnedInOutlinedIcon sx={{ ml: 18 }} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupList;
