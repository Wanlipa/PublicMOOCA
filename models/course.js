const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Course = sequelize.define('course', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    courseNumber: Sequelize.STRING,
    courseName: Sequelize.STRING,
    description: Sequelize.STRING,
    passRate: Sequelize.DOUBLE,
    subjectArea: Sequelize.STRING,
    registered: Sequelize.INTEGER,
    totalHour: Sequelize.INTEGER,
    effort: Sequelize.DOUBLE,
    cLength: Sequelize.STRING,
    remember: Sequelize.DOUBLE,
    understand: Sequelize.DOUBLE,
    apply: Sequelize.DOUBLE,
    analyze: Sequelize.DOUBLE,
    evaluate: Sequelize.DOUBLE,
    create: Sequelize.DOUBLE,
    cBloom: Sequelize.STRING,
    section: Sequelize.INTEGER,
    sequence: Sequelize.STRING
});

module.exports = Course;