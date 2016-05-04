import path from 'path';

export function Render(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
}
