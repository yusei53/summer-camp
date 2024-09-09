import getGroups from "@/actions/getGroups";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { User } from "@prisma/client";
import React from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Link from "next/link";
type TProps = {
  currentUserId: User["id"] | undefined;
};

const truncateGroupName = (name: string) => {
  const maxLength = 7;
  if (name.length > maxLength) {
    return name.slice(0, 7) + "…";
  }
  return name;
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
        mx: 10,
      }}
    >
      {groups.map((group) => (
        <Grid
          key={group.id}
          item={true}
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href={`/category/${group.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              key={group.id}
              sx={{
                width: 180,
                height: 180,
                borderRadius: "16px",
                position: "relative",
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
                alignItems={"center"}
                ml={1}
              >
                <FiberManualRecordIcon sx={{ fontSize: 20 }} />
                <Typography>{truncateGroupName(group.groupName)}</Typography>
              </Box>
              <Box>
                <ColorLensIcon
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                  }}
                />
              </Box>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupList;
