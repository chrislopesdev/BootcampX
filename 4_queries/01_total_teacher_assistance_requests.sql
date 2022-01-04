SELECT count(assistance_requests.*) as total_assistances, teachers.name
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;

-- SELECT COUNT(assistance_requests) AS total_assistances, teachers.name
-- FROM assistance_requests
-- JOIN teachers ON teacher_id = teachers.id
-- WHERE teachers.name = 'Waylon Boehm'
-- GROUP BY teachers.name;