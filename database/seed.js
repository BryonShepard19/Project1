const { User, Project, Task } = require('../models');

(async () => {
  try {
    const user = await User.create({ name: "Alice", email: "alice@test.com" });

    const project = await Project.create({
      title: "API Build",
      userId: user.id
    });

    await Task.bulkCreate([
      { title: "Setup DB", projectId: project.id },
      { title: "Build Routes", projectId: project.id }
    ]);

    console.log("Seed complete");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();