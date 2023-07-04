import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  const organization = [
    {
      id: 1,
      name: "Decagon",
      location: "Lekki",
    },
    {
      id: 2,
      name: "Verraki",
      location: "Mainland",
    },
    {
      id: 3,
      name: "Dangote",
      location: "Oshodi",
    }
  ];

  res.render(
    'index',
    {
      title: 'Express',
      allOrganization: "This is to get all organization",
      list: organization
    });
});

export default router;
