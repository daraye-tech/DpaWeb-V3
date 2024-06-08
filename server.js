import express from 'express';
import next from 'next';

const express = require('express');
const next = require('next');

const App = express();

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
    console.log(`running on PORT ${PORT}`);
});
