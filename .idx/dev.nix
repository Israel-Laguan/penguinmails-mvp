{pkgs}: {
  channel = "stable-24.11";
  packages = [
    pkgs.nodejs_22
    pkgs.prisma-engines
  ];
  idx.workspace.onCreate = {
    npm-install = "npm install";
  };
  idx.workspace.onStart = {
    npm-dev = "npm run dev";
  };
  idx.previews = {
    enable = false;
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}