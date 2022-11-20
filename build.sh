mkdir build && \
cp -r frontend/public build && \
cp -r frontend/dist build && \
nexe backend/app.js --build --resource "build/*" -f "-e 'process.env.ASSET_DIR = \"build\"'"
rm -r build