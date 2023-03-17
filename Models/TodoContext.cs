using Microsoft.EntityFrameworkCore;

namespace react_todo_app.Models;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options): base(options)
    {
    }

    public DbSet<TodoItem> TodoItems { get; set; } = null!;
}
