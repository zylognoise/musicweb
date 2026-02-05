function showSection(id) {
  document.querySelectorAll('.panel').forEach(p => {
    p.style.display = 'none';
  });

  const section = document.getElementById(id);
  section.style.display = 'block';
}
