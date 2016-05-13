import path from 'path';

export function Render(req, res) {
  res.status(200).sendFile(path.join(__dirname, '../../client/index.html'));
}
