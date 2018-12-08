const generateManifest = (options, manifestPath) => {
  const fs = require("fs");
  const { version_no: version, description, name, popup } = options;
  const manifestJson = {
    manifest_version: 2,
    name,
    description,
    version
  };
  if (popup) {
    manifestJson.browser_action = {
      default_popup: "popup.html"
    };
  }
  fs.writeFileSync(manifestPath, JSON.stringify(manifestJson, null, 4), {
    encoding: "utf-8"
  });
};

module.exports = generateManifest;
