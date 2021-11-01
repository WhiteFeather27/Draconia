import express from "express";
import { newLocal } from "./app";

export const debug = require('debug')(newLocal);
export const app = express();
