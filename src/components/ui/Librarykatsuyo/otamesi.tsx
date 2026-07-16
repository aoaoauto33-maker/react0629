import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {
  Apple,
  GitHub,
  Google,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

export default function otamesi() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // ログイン処理
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          maxWidth: 440,
          p: 4,
          borderRadius: 2,
        }}
      >
        {/* タイトル */}
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
          }}
        >
          Cloudflare にサインイン
        </Typography>


        {/* SNSログイン */}
        <Grid
          container
          spacing={2}
          sx={{ mb: 3 }}
        >
          <Grid size={4}>
            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              startIcon={<Google />}
              sx={{
                textTransform: "none",
              }}
            >
              Google
            </Button>
          </Grid>


          <Grid size={4}>
            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              startIcon={<Apple />}
              sx={{
                textTransform: "none",
              }}
            >
              Apple
            </Button>
          </Grid>


          <Grid size={4}>
            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              startIcon={<GitHub />}
              sx={{
                textTransform: "none",
              }}
            >
              GitHub
            </Button>
          </Grid>


          <Grid size={12}>
            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              startIcon={<LockOutlined />}
              sx={{
                textTransform: "none",
              }}
            >
              SSOで続行
            </Button>
          </Grid>
        </Grid>


        {/* 区切り */}
        <Divider sx={{ my: 3 }}>
          または
        </Divider>


        {/* ログインフォーム */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="メールアドレス"
            type="email"
            fullWidth
            required
          />


          <TextField
            label="パスワード"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />


          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 1,
              textTransform: "none",
            }}
          >
            ログイン
          </Button>
        </Box>


        {/* 下部リンク */}
        <Box
          sx={{
            mt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            アカウントをお持ちではありませんか？{" "}
            <Link href="#">
              サインアップ
            </Link>
          </Typography>


          <Typography
            variant="body2"
            sx={{ mt: 1 }}
          >
            <Link href="#">
              メール
            </Link>
            {" または "}
            <Link href="#">
              パスワード
            </Link>
            を忘れましたか？
          </Typography>
        </Box>

      </Paper>
    </Box>
  );
}